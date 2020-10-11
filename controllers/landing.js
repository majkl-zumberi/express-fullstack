const models= require('../models');

exports.get_landing= function(req, res, next) {
    res.render('landing', { title: 'Express' });
};

exports.showLeads= async function(req, res, next) {
    let leads = await models.Lead.findAll();
    res.render('landing', { title: 'Express' , leads});
};
exports.showLead= async function(req, res, next) {
  let lead = await models.Lead.findOne({
      where:{
        id:req.params.lead_id
      }
    });
   
    res.render('lead', { lead });
};
exports.showEditLead= async function(req, res, next) {
  let lead = await models.Lead.findOne({
      where:{
        id:req.params.lead_id
      }
    });
   
    res.render('lead/edit_lead', { lead });
};
exports.editLead= async function(req, res, next) {
  
  
  let updatedLead= await models.Lead.update({
    email:req.body.email_form
  }, {
    where:{
      id:req.params.lead_id
    }
  });

  res.redirect('/lead/'+req.params.lead_id);
};
exports.deleteLead= async function(req, res, next) {
  
  
  await models.Lead.destroy({
    where:{
      id:req.params.lead_id
    }
  });

  res.redirect('/leads');
};
exports.deleteLeadJson = async function(req, res, next) {
  
  
  await models.Lead.destroy({
    where:{
      id:req.params.lead_id
    }
  });

  res.send({msg:"Successo"});
};

exports.submit_form = (req,res,next)=>{
    console.log(`email: ${req.body.email_form}`);
    return models.Lead.create({
      email:req.body.email_form
    }).then(lead=>{
      res.redirect('/leads');
    })
    
};