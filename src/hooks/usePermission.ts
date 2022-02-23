const usePermission = () => {
	const permissionList = JSON.parse(localStorage.getItem('roles') || '')

	const hasPermission = (permission: string) => {
		try {
			return permissionList.some((e: any) => e.section === permission)
		} catch {
			return false
		}
	}

	return { hasPermission }
}

export default usePermission
