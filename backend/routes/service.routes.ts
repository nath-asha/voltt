import { Router } from 'express';
import {
  getAllServices,
  createService,
  updateService,
  deleteService,
} from '../controllers/servicesController';

// import {
//   getSocialfeed,
//   createSocialfeed,
//   updateSocialfeed,
//   deleteSocialfeed,
// } from '../controllers/social-feed.controller';

import {
  getAllTestimonials,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
} from '../controllers/testimonialsController';

import {
  getProject,
  createProject,
  updateProject,
  deleteProject,
} from '../controllers/projectsController';
import authenticateJWT from './auth.middleware';
import {createContact} from '../controllers/contactController' ;
import {upload} from './mutler';

const router = Router();

router.get('/services', getAllServices);
router.post('/services',(upload as any).single('file'), createService);
router.put('/services/:id', updateService);
router.delete('/services/:id', deleteService);

// router.get('/social-feed', getSocialfeed);
// router.post('/social-feed', createSocialfeed);
// router.put('/social-feed/:id', updateSocialfeed);
// router.delete('/social-feed/:id', deleteSocialfeed);

router.get('/project', getProject);
router.post('/project', authenticateJWT, createProject);
router.put('/project/:id',authenticateJWT, updateProject);
router.delete('/project/:id', deleteProject);

router.get('/testimonial', getAllTestimonials);
router.post('/testimonial', createTestimonial);
router.put('/testimonial/:id', updateTestimonial);
router.delete('/testimonial/:id', deleteTestimonial);

router.post('/contact',createContact)
export default router;
