/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  const devs = arr.map((e) => {
    if (e.profession === "developer") {
      return e;
    }
  }).filter(Boolean);

  // console.log(devs);
  console.log("PrintDeveloperbyMap : \n", devs);
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  const devArr = [];
  arr.forEach(e => {
    if (e.profession === "developer") {
      devArr.push(e);

    }
  });
  console.log("\n\nPrintDeveloperbyForEach : \n", devArr);
}

function addData() {
  //Write your code here, just console.log
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);

  console.log("\n\naddData : \n", arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  const filteredEmployees = arr.filter((val) => val.profession !== "admin");
  console.log("\n\nremoveAdmin : \n", filteredEmployees);
}

function concatenateArray() {
  //Write your code here, just console.log
  const newArr = [
    { id: 5, name: "Mmmm", age: "22", profession: "demo" },
    { id: 6, name: "Kkkk", age: "23", profession: "test" },
    { id: 7, name: "Jjjj", age: "24", profession: "Rest" },
  ];

  const mix = arr.concat(newArr);
  console.log("\n\nconcatenateArray : \n", mix);
}



PrintDeveloperbyMap();
PrintDeveloperbyForEach();
addData();
removeAdmin();
concatenateArray();