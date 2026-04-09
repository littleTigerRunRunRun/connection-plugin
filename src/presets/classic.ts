import { ClassicFlow, ClassicParams } from '../flow';
import { ClassicScheme } from '../types';

/**
 * Classic preset. Uses `ClassicFlow` for managing connections by user
 */
export function setup<Schemes extends ClassicScheme>(params?: Partial<ClassicParams<Schemes>>) {
  return () => new ClassicFlow<Schemes, any[]>(params)
}
