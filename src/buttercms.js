import Butter from 'buttercms';

const butter = Butter(process.env.VUE_APP_BUTTER);
export default butter;

// example fetch
butter.post.list({ page: 1, page_size: 10 })
  .then((response) => {
    console.log(response);
  });
