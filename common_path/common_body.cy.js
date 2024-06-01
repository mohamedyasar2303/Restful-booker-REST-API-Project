//const { three_digit_number } = require("./common_function.cy")
//const common_functionCy = require("./common_function.cy")



module.exports={

    first_post :{
            
            firstname: "Sally",
            lastname: "Brown",
            totalprice: 111,
            depositpaid: true,
            bookingdates: {
                checkin: "2018-01-01",
                checkout: "2019-01-01"
            },
            additionalneeds: "Breakfast"
    },



    get_create_token:{
        
            username : "admin",
            password : "password123",    
    },
    

    put_update:{
     
        firstname: "moh",
      lastname: "yas",
      totalprice: 222,
      depositpaid: true,
      bookingdates: {
        checkin: "2024-05-09",
        checkout: "2024-05-10"
      },
      additionalneeds: "noodles",
    }
            
    






}
