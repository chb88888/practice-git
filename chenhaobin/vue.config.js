module.exports = {
    lintOnSave: false,
    devServer: {
        before: function (app) {
            const USER = [
                {
                    user:'admin',
                    pwd:123
                }
            ]
            const KEY = "FE"
            app.get('/api/login',(req,res) => {
                let {user,pwd} = req.query;
                let loginFlag =USER.some(item => item.user == user && item.pwd == pwd)
                if(loginFlag) {
                    res.json({
                        errCode:0,
                        msg:'success',
                        token:`${KEY}_${user}_${Date.now()}`
                    })
                } else{
                    res.json({
                        errCode:-1,
                        msg:'fail'
                    })
                }
            })
        }
    }

}
