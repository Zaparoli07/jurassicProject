import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getDinosaurs } from './Controller/dinosaur.ts'

const router = new Router()

router.get('/api/v1/dinosaurs', getDinosaurs)

export default router
