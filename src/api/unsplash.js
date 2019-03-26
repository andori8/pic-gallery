import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 17ceb2a2592b390b6cbc6102dba4a140155cdc93d9b08a8f56d06cc3e2a7371d'
  }
})
