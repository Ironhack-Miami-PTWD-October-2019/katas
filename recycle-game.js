// ************************************************************************************
// https://gist.github.com/sandrabosk/3b922edd25f87fe67a0e82e00e0d8bd8
// ************************************************************************************

// solution 1:
trash.forEach(tr => {
  if (tr.dirty) trashBins.black.push(tr.name);
  else trashBins[binColorMap[tr.material]].push(tr.name);
});

// solution 2:
trash.reduce(
  (acc, val) =>
    val.dirty
      ? (acc.black.push(val.name), acc)
      : (acc[binColorMap[val.material]].push(val.name), acc),
  trashBins
);

console.log(trashBins);
