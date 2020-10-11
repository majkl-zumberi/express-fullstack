const express = require('express');
const router = express.Router();

const { get_landing,submit_form,showLeads,showLead,showEditLead,editLead,deleteLead,deleteLeadJson } = require('../controllers/landing');

/* GET home page. */
router.get('/', get_landing);

router.post('/',submit_form);

router.get('/leads',showLeads);

router.get('/lead/:lead_id',showLead);

router.get('/lead/:lead_id/edit',showEditLead);

router.post('/lead/:lead_id/edit',editLead);

router.post('/lead/:lead_id/delete',deleteLead);

router.post('/lead/:lead_id/delete-json',deleteLeadJson)
module.exports = router;
