import "dotenv/config"

const config = {

    app : {
        port : process.env.PORT || 8080
    },
    db :{},
    key : {}
}

export default config