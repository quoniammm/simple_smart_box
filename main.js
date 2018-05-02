var dataList = document.getElementById('languages');

var txtFile = new XMLHttpRequest();
txtFile.onreadystatechange = function()
{
  print("1");
  if (txtFile.readyState === 4) {  // document is ready to parse.
    print("2");    
    if (txtFile.status === 200) {  // file is found
      allText = txtFile.responseText; 
      lines = txtFile.responseText.split("\n");
      print(lines[0])
    }
  }
}