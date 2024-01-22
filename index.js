const firebaseConfig = {
    apiKey: "AIzaSyCAFNffRomcKiTPFzibKShEwu8Hmqombnw",
    authDomain: "nscodeuploadtask-e4a7e.firebaseapp.com",
    projectId: "nscodeuploadtask-e4a7e",
    storageBucket: "nscodeuploadtask-e4a7e.appspot.com",
    messagingSenderId: "504093662300",
    appId: "1:504093662300:web:f17909fb77d6c861309a99",
    measurementId: "G-4SM4HL9J3M"
};

firebase.initializeApp(firebaseConfig);


var fileText = document.querySelector(".fileText");
var uploadPercentage = document.querySelector(".uploadPercentage");
var progress = document.querySelector(".progress");
var percentVal;
var fileItem;
var fileName;
var img = document.querySelector(".img");
 function getFile(e){
    fileItem = e.target.files[0];
    fileName = fileItem.name;
    fileText.innerHTML = fileName;
}



function uploadImage(){

    let storageRef = firebase.storage().ref("image/"+fileName);
    let uploadTask = storageRef.put(fileItem);


    uploadTask.on("state_changed",(snapshot)=>{
        console.log(snapshot);
        percentVal = Math.floor((snapshot.bytesTransferred/snapshot.totalBytes)*100);
        console.log(percentVal);
        uploadPercentage.innerHTML =percentVal+"%";
        progress.style.width=percentVal+"%"; 
    },(error)=>{
        console.log("Error is ", error);
    },()=>{

        uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
            console.log("URL", url);

            if(url != ""){
                img.setAttribute("src",url);
                img.style.display="block";

            }



        })
    })

}
document.getElementById("btn1").onclick = function(){
    console.log("btn1 clicked")
}