export function hasItems(arrayList) {
	return arrayList.length > 0 ? true : false;
}

export function filterIsSelected(arrayList) {
	if (!hasItems(arrayList)) {
		return null;
	} else {
		return arrayList.filter((i) => i.isSelected === true)[0];
	}
}
