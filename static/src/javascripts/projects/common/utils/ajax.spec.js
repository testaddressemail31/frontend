describe('AJAX', () => {
    const reqwestSpy = jest.mock(() => ({
        then() {},
    }));
    let ajax;

    beforeEach((done) => {
        jest.mock({
            reqwest: reqwestSpy,
            'common/utils/config': {
                page: {
                    ajaxUrl: 'http://api.nextgen.guardianapps.co.uk',
                },
            },
        });
        jest.mock(['common/utils/ajax'], () => {
            ajax = arguments[0];
            done();
        });
    });

    it('should be defined', () => {
        expect(ajax).toBeDefined();
    });

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

