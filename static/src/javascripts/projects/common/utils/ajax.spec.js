describe('AJAX', () => {
    const ajax = require('common/utils/ajax');
    console.log(jest.spyOn);
    const reqwestSpy = jest.spyOn('reqwest').mockImplementation(() => ({
        then() {},
    }));

    beforeEach(() => {

    });

    // it('should be defined', () => {
    //     expect(ajaxSpy).toBeDefined();
    // });

    it('should proxy calls to reqwest', () => {
        ajax({ url: '/endpoint.json', param: 'value' });

        expect(reqwestSpy).toHaveBeenCalledWith({
            url: 'http://api.nextgen.guardianapps.co.uk/endpoint.json',
            crossOrigin: true,
            param: 'value',
        });
    });

    it('should not touch a url that is already absolute', () => {
        ajax({ url: 'http://apis.guardian.co.uk/endpoint.json' });

        expect(reqwestSpy).toHaveBeenCalledWith({ url: 'http://apis.guardian.co.uk/endpoint.json' });
    });

    it('should not touch a url that is already absolute (https)', () => {
        ajax({ url: 'https://apis.guardian.co.uk/endpoint.json' });

        expect(reqwestSpy).toHaveBeenCalledWith({ url: 'https://apis.guardian.co.uk/endpoint.json' });
    });

    it('should not touch a protocol-less url', () => {
        ajax({ url: '//apis.guardian.co.uk/endpoint.json' });

        expect(reqwestSpy).toHaveBeenCalledWith({ url: '//apis.guardian.co.uk/endpoint.json' });
    });

    it('should be able to update host', () => {
        ajax.setHost('http://apis.guardian.co.uk');
        ajax({ url: '/endpoint.json' });

        expect(reqwestSpy).toHaveBeenCalledWith({
            url: 'http://apis.guardian.co.uk/endpoint.json',
            crossOrigin: true,
        });
    });
});

