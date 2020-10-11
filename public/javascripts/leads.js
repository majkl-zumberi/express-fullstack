const deleteLead = (leadId)=>{
    axios.post(`/lead/${leadId}/delete-json`)
      .then(function (response) {
        console.log(response);
        document.getElementById(leadId).remove();
      })
      .catch(function (error) {
        console.log(error);
      });
};