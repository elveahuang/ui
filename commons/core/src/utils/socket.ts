import { env } from '@commons/core/env';
import { log } from '@commons/core/utils';
import { Client } from '@stomp/stompjs';

export const connect = (client?: Client | null): Client => {
    if (client && client.active) {
        return client;
    }
    client = new Client({
        brokerURL: env.socket.server + 'web-socket',
        debug: function (str: string): void {
            log(str);
        },
        reconnectDelay: 5000,
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
    });
    client.activate();
    return client;
};
