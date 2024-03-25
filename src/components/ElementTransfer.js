import React, { useState } from 'react'

const ElementTransfer = () => {

    const [bucket1, setBucket1] = useState(["bckt1 ele 1", "bckt1 ele 2", "bckt1 ele 3", "bckt1 ele 4", "bckt1 ele5"])
    const [bucket2, setBucket2] = useState(["bckt2 ele 1", "bckt2 ele 2", "bckt2 ele 3", "bckt2 ele 4", "bckt2 ele5"])
    const [selected, setSelected] = useState([])
    const [selectedBucket, setSelectedBucket] = useState(null);
    const buttons = ["Add", "remove", "Add all", "Remove All",]

    const selectTheElement = (element, bucketNumber) => {
        if (selectedBucket !== null && selectedBucket !== bucketNumber) {
            alert("You cannot select elements from both buckets simultaneously.");
            return;
        }

        const updatedSelected = selected.includes(element)
            ? selected.filter(item => item !== element)
            : [...selected, element];

        setSelected(updatedSelected);

        setSelectedBucket(bucketNumber);

    };


    const elementsMethods = (method) => {
        if (method === "Add") {
            if (selected.length === 0) {
                alert("Please select at least one element to add.");
                return;
            }
            if (selectedBucket === 1) {
                const shiftingToBucktet2 = [...bucket2, ...selected]
                setBucket2(shiftingToBucktet2)
                let afterAdd = bucket1.filter((element) => !selected.includes(element))
                setBucket1(afterAdd)
                setSelectedBucket(null)
                setSelected([])
            } else if (selectedBucket === 2) {

                const shiftingToBucktet1 = [...bucket1, ...selected]
                setBucket1(shiftingToBucktet1)
                let afteradd = bucket2.filter((element) => !selected.includes(element))
                setBucket2(afteradd)
                setSelectedBucket(null)
                setSelected([])
            }

        }
        if (method === "remove") {
            if (!selected.length) {
                alert("Please select at least one element to remove")
            }

            if (selectedBucket === 1) {
                setBucket1((buckelemts) => buckelemts.filter((elems) => !selected.includes(elems)))
                setSelected([])
                setSelectedBucket(null)
            } else if (selectedBucket === 2) {
                setBucket2((buckelemts) => buckelemts.filter((elems) => !selected.includes(elems)))
                setSelected([])
                setSelectedBucket(null)
            }

        }

        if (method === "Add all") {
            const confirmationMessage = "Do you want to add elements from Bucket1 to Bucket2 or Bucket2 to Bucket1?\n\n" +
                "Click OK to add  elements from Bucket1 to Bucket2\n" +
                "Click Cancel to add  elements from Bucket2 to Bucket1";
            const confirmation = window.confirm(confirmationMessage);
            if (confirmation) {

                if (bucket1.length === 0) {
                    alert("There are no elements in Bucket1.");
                    return;
                }
                const shiftingToBucket2 = [...bucket2, ...bucket1];
                setBucket2(shiftingToBucket2);
                setBucket1([]);
            } else {
                if (bucket2.length === 0) {
                    alert("There are no elements in Bucket2.");
                    return;
                }
                // Shift elements from Bucket2 to Bucket1
                const shiftingToBucket1 = [...bucket1, ...bucket2];
                setBucket1(shiftingToBucket1);
                setBucket2([]);
            }
        }


        if (method === "Remove All") {

            const confirmationMessage = "Do you want to remove elements from Bucket1 or Bucket2\n\n" +
                "Click OK to remove  elements from Bucket1 \n" +
                "Click Cancel to remove  elements from Bucket2";
            const confirmation = window.confirm(confirmationMessage);
            if (confirmation) {
                if (bucket1.length === 0) {
                    alert("there is no element in bucket one")
                    return
                }
                setBucket1([])
            } else {

                if (bucket2.length === 0) {
                    alert("there is no element in bucket one")
                    return
                }
                setBucket2([])
            }

        }

    }
    return (
        <div className='hole-bucket-container'>

            <div className='bucket-and-tittle'>
                <div>
                    <h2>Bucket 1</h2>
                </div>
                <div className='single-bucket'>

                    {bucket1.map((elem, index) => (
                        <div onClick={() => selectTheElement(elem, 1)} className={`single-element ${selected.includes(elem) ? 'selected' : ''}`} key={index}>{elem}</div>
                    ))}
                </div>
            </div>
            <div className='all-buttons'>
                {buttons.map((buttonName, i) => (
                    <button key={i} onClick={() => elementsMethods(buttonName, 2)} className='single-button'>{buttonName}</button>
                ))}

            </div>
            <div className='bucket-and-tittle'>
                <div>
                    <h2>Bucket 2</h2>
                </div>
                <div className='single-bucket'>
                    {bucket2.map((elem, index) => (
                        <div onClick={() => selectTheElement(elem, 2)} className={`single-element ${selected.includes(elem) ? 'selected' : ''}`} key={index}>{elem}</div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ElementTransfer