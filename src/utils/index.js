/**
 * Created by jiajunhe on 2016/12/7.
 */

// todo
export let CartItems = {};

export const handlerBuy = (id) => {
	if (CartItems[id])
		CartItems[id] += 1;
	else
		CartItems[id] = 1;
};
