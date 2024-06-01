/// <reference types="Cypress" />

describe("REST FULL BOOKERS", () => {


  let token = null;

  before("Create Token", () => {
    cy.request({
      method: "POST",
      url: "https://restful-booker.herokuapp.com/auth",
      headers: { "content-type": "application/json" },

      body: {
        username: "admin",
        password: "password123",
      },

    })
    .then((response) => {
      token = response.body.token;
      cy.log(JSON.stringify(token));
      Cypress.env("token", token);
    });

  });


  it("GET METHOD", () => {

    cy.request("GET", "https://restful-booker.herokuapp.com/booking")

    .then(function (Collect_Details) {
      expect(Collect_Details.status).to.equal(200);
      const Get_Details = Collect_Details.body;
      let ids=Collect_Details.body.map(booking => booking.bookingid);
      cy.log(JSON.stringify(Get_Details));
      cy.log("Collect_get_Details");
      cy.log(JSON.stringify(ids))
      Cypress.env("ids", ids);
   
    });

  });


  it("GET ID", () => {
    const ids = Cypress.env("ids");

    if (ids && ids.length > 0) { // Check if the IDs array exists and is not empty
        const randomIndex = Math.floor(Math.random() * ids.length);
        const randomId = ids[randomIndex];
        cy.log(`Using random ID: ${randomId}`);

        cy.request({
            method: "GET",
            url: `https://restful-booker.herokuapp.com/booking/${randomId}`, 
        })
        .then((response) => {
            expect(response.status).to.equal(200);
            let GETID = response.body;
            cy.log(JSON.stringify(GETID));
            cy.log("getid from default db");
        });
    } else {
        cy.log("No IDs found");
    }
});





  it("create booking", () => {

    cy.request({

      method: "POST",
      url: "https://restful-booker.herokuapp.com/booking",
      body: {
        firstname: "tailord",
        lastname: "care",
        totalprice: 111,
        depositpaid: true,
        bookingdates: {
          checkin: "2013-02-23",
          checkout: "2014-10-23",
        },
        additionalneeds: "Breakfast",
      },

    })
    .then((postedit) => {
      expect(postedit.status).to.equal(200);
      let firstpost = postedit.body;
      let firstpostId = postedit.body.bookingid;
      cy.log(JSON.stringify(firstpost));
      cy.log(JSON.stringify(firstpostId));
      cy.log("my first post");
      Cypress.env("firstpostId", firstpostId);
    });

  });



  it("GETTING MY FITST ID", () => {


    const firstpostId = Cypress.env("firstpostId");

    cy.request({
      method: "GET",
      url: `https://restful-booker.herokuapp.com/booking/${firstpostId}`,
      headers: { Accept: "application/json" },
    })

    .then((Gets_it_my_first_id) => {
      expect(Gets_it_my_first_id.status).to.equal(200);
      let GET_IT_MY_FITST_ID = Gets_it_my_first_id.body;
      cy.log(JSON.stringify(GET_IT_MY_FITST_ID));
      cy.log("getid from default db");
    });


  });



  it("PUT METHOD UPDATING", () => {


    const firstpostId = Cypress.env("firstpostId");
    Cypress.env("token", token);

    cy.request({
      method: "PUT",
      url: `https://restful-booker.herokuapp.com/booking/${firstpostId}`,
      headers: {

        Accept: "application/json",
        Cookie: `token=${token}`,
      },

      body: {
        firstname: "tata",
        lastname: "tcs",
        totalprice: 10000,
        depositpaid: true,
        bookingdates: {
          checkin: "2018-01-01",
          checkout: "2019-01-01",
        },
        additionalneeds: "dinner",
      },

    })
    
    .then((put_method_update_booking) => {
      expect(put_method_update_booking.status).to.equal(200);
      let put_method = put_method_update_booking.body;
      cy.log(JSON.stringify(put_method));
      cy.log("updated using put");
    });


  });



  it("PATCH METHOD GOING TO UPDATE ONLY NAME", () => {


    const firstpostId = Cypress.env("firstpostId");
    Cypress.env("token", token);

    cy.request({
      method: "PATCH",
      url: `https://restful-booker.herokuapp.com/booking/${firstpostId}`,
      headers: {
        
        Accept: "application/json",
        Cookie: `token=${token}`,

      },

      body: {
        firstname: "Tata Consultancy Services",
        lastname: "tcs",
      },

    })

    .then((updated) => {
      expect(updated.status).to.equal(200);
      let UPDATED = updated.body;
      cy.log(JSON.stringify(UPDATED));
      cy.log("UPDATED");
    });


  });



  it("DELETED CREATED ITEAM", () => {


    const firstpostId = Cypress.env("firstpostId");
    Cypress.env("token", token);

    cy.request({
      method: "DELETE",
      url: `https://restful-booker.herokuapp.com/booking/${firstpostId}`,
      headers: {

        "Content-Type": " application/json",
        Cookie: `token=${token}`,
      },

    })

    .then((deleted) => {
      expect(deleted.status).to.equal(201);
      let DELETED = deleted.body;
      cy.log(JSON.stringify(DELETED));
      cy.log("DELETED");

    });

  });



  it("CHECK THE GET FINALY", () => {


    cy.request({
      method: "GET",
      url: "https://restful-booker.herokuapp.com/ping",
    })


    .then((checkit) => {
      expect(checkit.status).to.equal(201);
      let checkitall = checkit.body;
      cy.log(JSON.stringify(checkitall));
      cy.log("checkeditall");

    });


  });



});
