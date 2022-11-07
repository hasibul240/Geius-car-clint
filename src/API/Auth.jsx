export const set_auth_token = (user, from, navigate) => {
    const current_user = { email: user.email, }
    fetch(`https://genius-car-server-seven-self.vercel.app/jwt`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ current_user })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            localStorage.setItem('genius_token', data.token)
            if (from) {
                navigate(from, { replace: true });
            }

        })
};