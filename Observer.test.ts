import Observable from "./Observer";

type Data = { message: string };
const observable = new Observable<Data>();

/////////////////////////////////////////////////////////////

test('called once with data after subscribtion and notify', () => {
    //make subscribtion and notify with mocking
    const mockObserver = jest.fn();
    observable.subscribe(mockObserver);

    const data: Data = { message: 'Hello there' };
    observable.notify(data);

    expect(mockObserver).toHaveBeenCalledWith(data);
    expect(mockObserver).toHaveBeenCalledTimes(1);
});

test('not called after unsubscribtion', () => {
    const mockObserver = jest.fn();
    const unsubscribe = observable.subscribe(mockObserver);

    const data: Data = { message: 'Hello there' };
    unsubscribe(); // return of subscribtion

    observable.notify(data);

    expect(mockObserver).not.toHaveBeenCalled();
    // expect(mockObserver).toHaveBeenCalled(1); // error its shouldnt be called
});

test('subscribe two observers before unsubscribing one of them and check its not called', () => {
    const mockObserver1 = jest.fn();
    const mockObserver2 = jest.fn();

    observable.subscribe(mockObserver1);
    const unsubscribe = observable.subscribe(mockObserver2);

    observable.notify({ message: 'Notify before unsubscribe' });

    expect(mockObserver1).toHaveBeenCalled();
    expect(mockObserver2).toHaveBeenCalled();

    unsubscribe();

    observable.notify({ message: 'Notify after unsubscribe' });

    expect(mockObserver1).toHaveBeenCalledTimes(2); 
    expect(mockObserver2).toHaveBeenCalledTimes(2); // error is here, it should be called only once as its unsubscribed
});