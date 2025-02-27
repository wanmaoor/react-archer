import { ArcherContainerContextType } from '../ArcherContainer/ArcherContainer.context';
import { RelationType, SourceToTargetType } from '../types';

export function assertContextExists(
  context: ArcherContainerContextType | null,
): asserts context is ArcherContainerContextType {
  if (!context) {
    throw new Error(
      `Could not find ArcherContainerContext in <ArcherElement>. Please wrap the component in a <ArcherContainer>.`,
    );
  }
}

export const generateSourceToTarget = (
  id: string,
  relations: Array<RelationType>,
): Array<SourceToTargetType> => {
  return relations.map(
    ({ targetId, sourceAnchor, targetAnchor, label, style, order = 0 }: RelationType) => ({
      source: {
        id,
        anchor: sourceAnchor,
      },
      target: {
        id: targetId,
        anchor: targetAnchor,
      },
      label,
      style,
      order,
    }),
  );
};
