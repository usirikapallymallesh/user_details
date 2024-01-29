// console.log("the text connection");

function theDataInsert() {
  let totalData = localStorage.getItem("Data");

  //    console.log(totalData);

  if (totalData) {
    alert("The data is present");
    let parsedData = JSON.parse(totalData);

    document.querySelector(".first-name").innerHTML = parsedData["firstName"];
    document.querySelector(".last-name").innerHTML = parsedData.LastName;
    document.querySelector(".country").innerHTML = parsedData.Country;
    document.querySelector(".phone-number").innerHTML = parsedData.PhoneNo;
    document.querySelector(".state").innerHTML = parsedData.State;
    document.querySelector(".city").innerHTML = parsedData.City;
    document.querySelector(".village").innerHTML = parsedData.Village;
    console.log(name);
  } else {
    let fName = prompt("enter the first Name :");
    let LName = prompt("Enter the Last Name");
    let country = prompt("Enter the country");
    let phonNo = prompt("enter the Phone no");
    let state = prompt("Enter the State");
    let city = prompt("enter the city");
    let village = prompt("enter the village");
    let Data = {
      firstName: fName,
      LastName: LName,
      Country: country,
      PhoneNo: phonNo,
      State: state,
      City: city,
      Village: village,
    };

    document.querySelector(".first-name").innerHTML = Data["firstName"];
    document.querySelector(".last-name").innerHTML = Data.LastName;
    document.querySelector(".country").innerHTML = Data.Country;
    document.querySelector(".phone-number").innerHTML = Data.PhoneNo;
    document.querySelector(".state").innerHTML = Data.State;
    document.querySelector(".city").innerHTML = Data.City;
    document.querySelector(".village").innerHTML = Data.Village;
    console.log(name);

    localStorage.setItem("Data", JSON.stringify(Data));
  }
}
window.onload = theDataInsert();
