import { Dynamic } from './dynamic'

export function DynamicLock(target: Dynamic, { }, descriptor: PropertyDescriptor) {
	const originalMethod = descriptor.value;

	if (target instanceof Dynamic && originalMethod.constructor.name == 'AsyncFunction') {
		descriptor.value = async function(...args: any[]) {
			this.__currentPromise = originalMethod.apply(this, ...args);

			await this.__currentPromise;
			this.__currentPromise = null;
		};
	}
}
