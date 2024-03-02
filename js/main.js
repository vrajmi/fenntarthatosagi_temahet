fetch("../data.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    console.log(data.json);
  });
