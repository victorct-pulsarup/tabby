/**
 * @function getActivatorPosition - Returns width, height and position of the activator
 * @param {node} node
 */
export function getActivatorPosition(activator) {
  if (!activator) {
    return {};
  }
  const { width, height } = activator.firstChild.getBoundingClientRect();
  const { left, top, right, bottom } = activator.getBoundingClientRect();
  return {
    top,
    left,
    right,
    bottom,
    width,
    height
  };
}
/**
 * @function getPopDimensions - Returns width, height of the popOver
 * @param {node} pop
 */
export function getPopDimensions(pop) {
  if (!pop) {
    return {};
  }
  const { width, height } = pop.getBoundingClientRect();
  const popWidth = width;
  const popHeight = height;
  return {
    popWidth,
    popHeight
  };
}

export function popXPosition(activator, pop) {
  const { left } = getActivatorPosition(activator);
  const popUpElement = pop.lastChild;
  const { popWidth } = getPopDimensions(popUpElement);

  const windowWidth = window.innerWidth;
  const activatorOffsetLeft = activator.offsetLeft;
  const popWidthAndLeft = popWidth + left;
  const diff = popWidthAndLeft - windowWidth;
  let leftPosition = activatorOffsetLeft;
  
  if (windowWidth < popWidthAndLeft) {
    leftPosition = activatorOffsetLeft - diff - 16;
  }
  return leftPosition;
}

export function popYPosition(activator, pop) {
  const { top, height } = getActivatorPosition(activator);
  const popUpElement = pop.lastChild;
  const { popHeight } = getPopDimensions(popUpElement);

  const windowHeight = window.innerHeight;
  const activatorOffsetTop = activator.offsetTop;
  const popHeightAndTop = popHeight + top;
  const diff = popHeightAndTop - windowHeight;
  let topPosition = activatorOffsetTop - popHeight - 8;

  if (windowHeight < popHeightAndTop) {
    topPosition = activatorOffsetTop - diff - 16;
  } else if (windowHeight > popHeightAndTop){
    topPosition = activatorOffsetTop + height + 8;
  }

  return topPosition;
}
