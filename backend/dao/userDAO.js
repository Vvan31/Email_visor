import { ObjectId } from 'mongodb';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Generate a token for the authenticated user
function generateToken(user) {
    // Define the payload for the token
    const payload = {
      userId: user._id,
      username: user.username,
      email: user.email,
    };
  
    // Sign the token with a secret key and set an expiration time
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '1h', // Set the expiration time as per your requirements
    });
  
    return token;
  }

let users;

export default class UserDAO {
  static async injectDB(conn) {
    if (users) {
      return;
    }
    try {
      users = await conn.db(process.env.EMAILS_NS).collection('users');
    } catch (e) {
      console.error(`Unable to connect in UserDAO: ${e}`);
    }
  }

  static async registerUser(user) {
    try {
      const { username, email, password } = user;
      const userAvailable = await users.findOne({ email });
      if (userAvailable) {
        return { error: 'User already exists' };
      }
      const hash = await bcrypt.hash(password, 10);
      const registerUserResult = await users.insertOne({
        username,
        email,
        password : hash,
      });
      const registeredUser = registerUserResult.ops[0];
      console.log('Registered User:', registeredUser);
      return registeredUser;
    } catch (e) {
      console.error(`Unable to register user: ${e}`);
      return { error: e };
    }
  }
  

  static async loginUser(user) {
    try {
      const { email, password } = user;
      
      // Retrieve the user with the provided email from the data store
      const existingUser = await users.findOne({ email });
    
      // Check if the user exists
      if (!existingUser) {
        return { error: 'User not found' };
      }
    
      // Compare the provided password with the stored password hash
      const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    
      // Check if the password is valid
      if (!isPasswordValid) {
        return { error: 'Invalid password' };
      }
    
      // Generate a token or session for the authenticated user
      const token = generateToken(existingUser);
    
      // Return the token or any other relevant information
      return { token: token };
    } catch (e) {
      console.error(`Unable to login user: ${e}`);
      return { error: e };
    }
  }
  
  

  static async getCurrentUser(token) {
    try {
      // Implement your logic to retrieve the current user based on the token
      return { message: 'Current user retrieved' };
    } catch (e) {
      console.error(`Unable to get current user: ${e}`);
      return { error: e };
    }
  }
}
