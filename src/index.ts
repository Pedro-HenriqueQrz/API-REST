// Arquivo principal da aplicação, onde tudo acontece

import {server} from './server/server';
import 'dotenv/config'

server.listen(process.env.PORT||3333, () => console.log(`APP rodando na porta ${process.env.PORT||3333}`));

