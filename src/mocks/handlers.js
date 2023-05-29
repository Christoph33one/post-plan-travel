import { rest } from 'msw';

const baseURL = "https://travel-planner-api.herokuapp.com/";
export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 7,
        username: 'chris',
        email: '',
        first_name: '',
        last_name: '',
        profile_id: 7,
        profile_image:
          'https://res.cloudinary.com/dqgs0kltd/image/upload/v1/media/images/pexels-erik-mclean-7422160_cuuxoy',
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) =>{
    return res(ctx.status(200)); 
  } )
];
