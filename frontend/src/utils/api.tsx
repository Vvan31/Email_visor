  export const getEmails = async () => {
    const res = await fetch('http://localhost:8000/api/v1/emails')
    const data = await res.json()
    return { props: { data } }
  }