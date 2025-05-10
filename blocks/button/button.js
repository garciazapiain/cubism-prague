export default function decorate(block) {
  const link = block.querySelector('a');
  if (link) {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  }
}
