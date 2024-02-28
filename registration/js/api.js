function runFunction() {
  let httpDistrict = new XMLHttpRequest();
  let httpMunicipality = new XMLHttpRequest();
  let httpRuralMunicipality = new XMLHttpRequest();

  httpDistrict.open(
    "GET",
    "https://sushant49shah.github.io/placedetails/district.json",
    true
  );
  httpMunicipality.open(
    "GET",
    "https://sushant49shah.github.io/placedetails/municipality.json",
    true
  );
  httpRuralMunicipality.open(
    "GET",
    "https://sushant49shah.github.io/placedetails/ruralMunicipalities.json",
    true
  );

  httpDistrict.send();
  httpMunicipality.send();
  httpRuralMunicipality.send();

  httpDistrict.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
      let district = JSON.parse(this.responseText);
      let provinceSelect = document.getElementById("province");
      provinceSelect.addEventListener("click", function () {
        let userProvince = document.getElementById("province").value;
        let output = "";
        for (let item of district) {
          if (item.Province == userProvince) {
            output += `<option value="${item.Name}">${item.Name}</option>`;
          }
        }
        document.getElementById("district").innerHTML = output;
        if(output == "")
        document.getElementById("district").innerHTML = "<option value=''>Not Found</option>"
      });
    }
  };

  var output1 = "";
  httpMunicipality.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
      let municipality = JSON.parse(this.responseText);
      let districtSelect = document.getElementById("district");
      districtSelect.addEventListener("click", function () {
        let userDistrict = document.getElementById("district").value;
        output1 = "";
        for (let item of municipality) {
          if (item.District == userDistrict) {
            output1 += `<option value="${item.Name}">${item.Name}</option>`;
          }
        }
        // document.getElementById("municipality").innerHTML = output1;
        // if(output1 == "")
        // document.getElementById("municipality").innerHTML = "<option value=''>Not Found</option>"
      });
    }
  };
  var output2 = "";
  httpRuralMunicipality.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
      let ruralMunicipality = JSON.parse(this.responseText);
      let districtSelect = document.getElementById("district");
      districtSelect.addEventListener("click", function () {
        let userDistrict = document.getElementById("district").value;
        output2 = output1+"";
        for (let item of ruralMunicipality) {
          if (item.District == userDistrict) {
            output2 += `<option value="${item.Name}">${item.Name}</option>`;
          }
        }
        document.getElementById("ruralMunicipality").innerHTML = output2;
        if(output2 == "")
        document.getElementById("ruralMunicipality").innerHTML = "<option value=''>Not Found</option>"
      });
    }
  };
}
runFunction();
