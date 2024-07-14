import { store } from '@commons/core/store';
import { connect } from '@commons/core/utils/socket';
import { Client } from '@stomp/stompjs';
import { defineStore } from 'pinia';

export interface SocketState {
    connected: boolean;
    client: Client;
}

export const useSocketStore = defineStore('socket', {
    persist: false,
    state: (): SocketState => ({
        connected: false,
        client: null,
    }),
    actions: {
        async initializeWebSocket(): Promise<void> {
            this.client = connect();
            this.client.onConnect = (): void => {
                this.connected = true;
            };
        },
    },
});

export const useSocketStoreExternal = () => {
    return useSocketStore(store);
};
