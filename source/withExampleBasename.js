/**
 * Created by DK on 2017/2/22.
 */
import useBasename from 'history/lib/useBasename';

export default function withExampleBasename(history, dirname) {
    return useBasename(() => history)({ basename: `${dirname}`});
}
