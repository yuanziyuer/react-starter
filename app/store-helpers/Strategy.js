/**
 * Created by natefang on 12/24/15.
 */
export function fetchStrategy(stores, item) {
    return {
        ...stores.Strategy.getItem(item),
    }
}