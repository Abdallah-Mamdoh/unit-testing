export type Observer <observeData> = (data: observeData) => void; 

export default class Observable <observeData> {

    observers : Observer<observeData>[] = [];

    subscribe (observer : Observer<observeData>){
        this.observers.push(observer);

        return(()=>{this.observers = this.observers.filter(obs => obs != observer)})
    }

    unsubscribe (observer : Observer<observeData>){
        this.observers = this.observers.filter(obs => obs != observer);
    }

    notify (data : observeData){
        this.observers.forEach(obs => obs(data));
    }
};




