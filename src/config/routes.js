const routes = {
    home: '/',
    following: '/following',
    // :nickname là đối tượng không cố định tuỳ vào to
    profile: '/profile/:nickname',
    upload: '/upload',
    search: '/search',
    live: '/live',
};

export default routes;
