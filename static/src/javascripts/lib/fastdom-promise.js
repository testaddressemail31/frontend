// @flow
import fastdom from 'fastdom';
import fastdomPromised from 'fastdom/extensions/fastdom-promised';

const promised = fastdom.extend(fastdomPromised);

export default {
    read: promised.measure.bind(promised),
    write: promised.mutate.bind(promised),
};
