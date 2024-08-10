
window.addEventListener("load",checkInternetConnection);

function checkInternetConnection()
{
    const statusText=document.getElementById('statusText');
    const ipAddressText=document.getElementById('ipAddressText');
    const NetworkStrengthText=document.getElementById('NetworkStrengthText');

    statusText.textContent = 'checking....';
    if(navigator.onLine){
      fetch('https://api.ipify.org?format=json')
       .then((response)=> response.json())
       .then((data)=>{
        ipAddressText.textContent = data.ip;
        statusText.textContent = 'connected';
        const connection = navigator.connection;
        const NetworkStrengthText = connection?connection.downlink  +'Mbps' : 'unknown';
        NetworkStrengthText.textContent = NetworkStrengthText;

       })
       .catch(()=>{
        statusText.textContent = 'disconnected';
        ipAddressText.textContent ='-';
        NetworkStrengthText.textContent ='-';
       })

    }
    else{

        statusText.textContent = "disconnected";
        ipAddressText.textContent="-";
        NetworkStrengthText.textContent="-";
    

    }
}