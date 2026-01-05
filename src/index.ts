// Arquivo principal da aplicação, onde tudo acontece

import {server} from './server/server';


server.listen(3333, () => console.log('APP rodando!'));

