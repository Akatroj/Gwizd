//      --libraries--       //
const express = require("express");

//      --Middleware--      //
app.use(express.json());

//      --Routes--      //

//      --server start--      //

app.listen(5000, () => {
    console.log("server has started");
})