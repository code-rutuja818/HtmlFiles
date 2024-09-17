function checkEmptyFeilds()
{
  var fname=document.getElementById("name").value;
  var birth=document.getElementById("birth").value;
  var email=document.getElementById("email").value;
  var mob=document.getElementById("mob").value;
  var picInput=document.getElementById("image-upload");
  var pic=picInput.files[0];

  if(fname==="")
  {
    alert('please select fullname');
    document.getElementById("name").focus();
    return true;
  }
  else if(birth==="")
  {
    alert('please select birthdate');
    document.getElementById("birth").focus();
    return true;
  }
  else if(email==="")
  {
    alert('please select email');
    document.getElementById("email").focus();
    return true;
  }
  else if(img==="")
  {
    alert('please select image');
    return true;
  }
  else if(!validateImageUpload())
  {
    return true;
  }
  return false;
}

  
  function loadImage() {
    
   document .getElementById("image-upload")
    document.addEventListener("change", function (e) {
    // Get the selected file
    const file = e.target.files[0];

    if (file) {
      // Create a FileReader
      const reader = new FileReader();
      // Set a callback function to run when the image is loaded
      reader.onload = function (e) {
      // Get the image data URL
      const imageUrl = e.target.result;
      // Display the image preview
     const imagePreview = document.getElementById("photo");
      imagePreview.innerHTML = `<img src="${imageUrl}" alt="Image
      Preview">`;
       imagePreview.style.width = "80%";
      imagePreview.style.height = "100%";
       };
      // Read the image file as a data URL
       reader.readAsDataURL(file);
      }
    });
  }

  function validateImageUpload(){ 
    var imgupload = document.getElementById("image-upload"); 
    var validExt = ["jpeg","png","jpg"]; 
   
    if(imgupload.value != "") 
    { 
      var imgExt = 
  imgupload.value.substring(imgupload.value.lastIndexOf('.')+1); 
      var result = validExt.includes(imgExt); 
      if(result == false) 
      { 
        alert('Selected file is not an image'); 
        return false; 
      } 
      else 
      { 
        if(parseFloat(imgupload.files[0].size/(1024 * 1024))>=2)
        { 
          alert('image size must be less then 2MB, The current size of 
          image is ='+imgupload.files[0].size/(1024 * 1024)); 
                  return false;
        } 
      } 
    } 
    else 
    { 
      alert('No image is selected..'); 
      return false; 
    } 
    return true; 
  } 
   

  function addRowToTable()
{
   var table = document.getElementById('table');
   if(!checkEmptyFields())
{
   var addNewRow = table.insertRow(table.rows.length),
    cell1 = addNewRow.insertCell(0),
    cell2 = addNewRow.insertCell(1),
    cell3 = addNewRow.insertCell(2),
    cell4 = addNewRow.insertCell(3),
    cell5 = addNewRow.insertCell(4),
    fname = document.getElementById('name').value,
    birth = document.getElementById('birth').value,
    email = document.getElementById('email').value,
    mob = document.getElementById('mob').value,
    picInput = document.getElementById('image-upload'),
    pic = picInput.files[0];
    cell1.innerHTML = fname;
    cell2.innerHTML = birth;
    cell3.innerHTML = email;
    cell4.innerHTML = mob;

if(pic)
{
   var imgElement = document.createElement('img');
   imgElement.src = URL.createObjectURL(pic);
   imgElement.style.width = "50px";
   imgElement.style.height = "50px";
   cell5.appendChild(imgElement);

}
   selectRowToInputFields();
}
}
  function selectRowToInputFields()
  {
    var rIndex,
    table1 = document.getElementById('table');
    for(var i = 1; i< table1.rows.length; i++)
    {
    table1.rows[i].onclick = function()
    {
    rIndex = this.rowIndex;
    document.getElementById('name').value = this.cells[0].innerHTML;
    document.getElementById('birth').value
    = this.cells[1].innerHTML;
    document.getElementById('email').value =
    this.cells[2].innerHTML;
    document.getElementById('mob').value = this.cells[3].innerHTML;
    var imgElement =
    document.getElementById('photo').querySelector('img');
    imgElement.src = this.cells[4].querySelector('img').src;
    };
  }
}
  

  


       
  

  
  


function removeSelectedRow()
{
  var table=document.getElementById('table');
  var rowIndex=1

  if(rowIndex>1 && rowIndex<table.rows.length)
  {
    alert("please select a valid row to delete");
    return;
  }

  var userConfirmed = confirm("are you sure to delete this row");
  if(!userConfirmed)
  {
    return;
  }
  table.deleteRow(rowIndex);
  clearAllFeilds();
}
  function editHTMLTableSelectedRow()
  {
    var table=document.getElementById("table");
    var rIndex;

    for(var i=1;i<table.rows.length;i++)
    {
      table.rows[i].addEventListener('click',function(){
        rIndex=this.rowIndex;
        console.log(rIndex);
      });
    }
  
    var updateButton = document.getElementById('btn-edit');
    updateButton.addEventListener('click',function()
    {
      if(rIndex!==undefined)
      {
        var fname=document.getElementById("name").value;
        var birth=document.getElementById("birth").value;
        var email=document.getElementById("email").value;
        var mob=document.getElementById("mob").value;

        if(rIndex>=0 && rIndex<table.rows.length)
        {
          table.rows[rIndex].cells[0].innerHTML=fname;
          table.rows[rIndex].cells[1].innerHTML=birth;
          table.rows[rIndex].cells[2].innerHTML=email;
          table.rows[rIndex].cells[3].innerHTML=mob;

          clearAllFeilds();
        
        }
        else{
          alert("valid row index");
        }
      }

      else{
        alert("please select a row first");
      }
      });
    }
  








