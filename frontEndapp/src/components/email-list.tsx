import * as React from 'react';
import {
  Box,
  Stack,
  Paper,
  Checkbox,
  Pagination
} from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
/*import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import OutboxIcon from '@mui/icons-material/Outbox';
 import FavoriteIcon from '@mui/icons-material/Favorite';
 */
import { styled } from '@mui/material/styles'; 
//styles
import '../style/emailList.css';

//API
import MailsService from "../services/mails";

//Components
import SearchBar from "./searchBar";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

type Mail = {
  _id: string;
  id: number;
  sent_time: string;
  owner_name: string;
  owner_email: string;
  category: string;
  title: string;
  description: string;
  content: string;
  recipient: string;
  read: boolean;
  answered: boolean;
};


function EmailsList({ category }: { category: string | null }) {
  //const [value, setValue] = React.useState(0);
  const [mails, setMails] = React.useState<Mail[]>([]);
  const [currentPage, setCurrentPage] = React.useState(0);

  React.useEffect(() => {
    retrieveMails();
  }, [currentPage, category]);

  const searchMails = (query: string) => {
    if (query === "") {
      retrieveMails();
      return;
    }
    let promise;
    promise = MailsService.searchEmails(query);
    promise
      .then(response => {
        console.log("searching mails");
        setMails(response.data.emailList);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const retrieveMails = () => {
    let promise;
    if (category) {
      promise = MailsService.findMails(category, "category", currentPage);
    } else {
      promise = MailsService.getAllMails(currentPage);
    }
    promise
      .then(response => {
        //console.log(response.data.emails);
        setMails(response.data.emails);
        setCurrentPage(response.data.page);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const handleItemClick = (mail: Mail) => {
    console.log(mail);
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    console.log("Changing page to " + value + " from category " + event);
    setCurrentPage(value);
  };

  return (
    <>
      <div className='Emailcontainer'>
        <SearchBar searchMails={searchMails}/>
        <Box sx={{ width: '100%' }} className='emailList'>
          <Stack spacing={1}>
            {mails.map((mail) => (
              <button key={mail._id} className='buttonEmail' onClick={() => handleItemClick(mail)}>
                <Item className='individualEmail'>
                  <div className='mainTitle'>
                    <Checkbox className='icon' />
                    <Checkbox
                      icon={<BookmarkBorderIcon />}
                      checkedIcon={<BookmarkIcon />}
                      className='icon'
                    />
                    <p className='owner'>{mail.owner_name}</p>
                  </div>
                  <div className='description'>
                    <p className='title'>{mail.title}</p>
                    <p className='title'> - </p>
                    <p className='description'>{mail.description}</p>
                  </div>
                  <div className='time'>
                    <p className='time'>{mail.sent_time}</p>
                  </div>
                </Item>
              </button>
            ))}
          </Stack>
        </Box>
      </div>
      <Pagination
        count={2}
        color="primary"
        className='pagination'
        size="large"
        onChange={handlePageChange}
        disabled
      />
    </>
  );
}

export default EmailsList;