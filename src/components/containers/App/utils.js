/*
 * COPYRIGHT:     Copyright © 2018 Xplorie LLC
 * Warning:       This product is protected by United States and international copyright laws.
 *                Unauthorized use or duplication of this software, in whole or in part,
 *                is prohibited.
 */

const sortingListByAlphabet = (array, option) => {
    const arrayModified = array.slice(0)

    arrayModified.sort((a, b) => {
        const x = a[option].toLowerCase()
        const y = b[option].toLowerCase()

        if (x < y) {
            return -1
        }
        if (x > y) {
            return 1
        }
        return 0
    })

    return arrayModified
}

export default sortingListByAlphabet
