import { Dynamic } from './dynamic'

export function DynamicLock(target: Dynamic, propertyKey: string, descriptor: PropertyDescriptor) {
	const originalMethod = descriptor.value;

	if (target instanceof Dynamic && originalMethod.constructor.name == 'AsyncFunction') {
		descriptor.value = async function(...args: any[]) {
			this.__currentPromise = originalMethod.apply(this, ...args)
		}
	}
}
