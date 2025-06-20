"use client"

import { useState } from "react"
import Image from "next/image"
import IconButton from "@mui/material/IconButton"
import CloseIcon from "@mui/icons-material/Close"
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Typography,
} from "@mui/material"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"

// Add a type for formData
interface RequestFormData {
  organizationName: string;
  contactName: string;
  position: string;
  address: string;
  telephone: string;
  email: string;
  eventDate: Date | null;
  intendedUse: string;
  numberOfAttendants: string;
  productWanted: string;
  additionalContactName: string;
  additionalContactEmail: string;
  donationReason: string;
}

const Request = () => {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(1) // 1 for Step 1, 2 for Step 2
  const [formData, setFormData] = useState<RequestFormData>({
    organizationName: "",
    contactName: "",
    position: "",
    address: "",
    telephone: "",
    email: "",
    eventDate: null,
    intendedUse: "",
    numberOfAttendants: "",
    productWanted: "",
    additionalContactName: "",
    additionalContactEmail: "",
    donationReason: "",
  })

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    })
  }

  const handleDateChange = (date: Date | null) => {
    setFormData({
      ...formData,
      eventDate: date,
    })
  }

  const handleNextStep = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStep(2) // Move to the second step
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    handleClose()
  }

  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-100 p-6 md:p-25 shadow-lg">
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <Image
          src="/images/donate .png"
          alt="Product Donation"
          width={500}
          height={300}
          className="rounded-lg shadow-md"
        />
      </div>

      <div className="md:w-1/2 text-center md:text-left space-y-4">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2d1a75]">
  Request Product Donations
</h2>

        <p className="text-[#2d1a75]">
          You can apply for product donations by completing this form. We will contact you should your application be successful. Please bear in mind that we will need at least 3 weeks&apos; notice before the date of your event.
        </p>
        <Button
          variant="contained"
          onClick={handleOpen}
          sx={{ backgroundColor: "#b2904c", "&:hover": { backgroundColor: "#5A2E0C" } }}
        >
          REQUEST DONATION
        </Button>
      </div>

      {/* First Pop-Up Dialog */}
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth="md"
          fullWidth
          PaperProps={{
            style: {
              borderRadius: "8px",
              maxWidth: "800px",
            },
          }}
        >
          <div className="relative">
            <DialogTitle className="bg-[#fff] text-[#2d1a75] py-4 text-center font-bold text-2xl relative">
              Request Product Donations
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: "white",
                  bgcolor: "#2e1a7a",
                  border: "2px solid white",
                  borderRadius: "50%",
                  padding: "4px",
                  "&:hover": {
                    bgcolor: "#231561",
                  },
                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>

            <DialogContent className="p-6">
              {step === 1 ? (
                <form onSubmit={handleNextStep}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <TextField
                      name="organizationName"
                      placeholder="Name of Organisation"
                      fullWidth
                      variant="outlined"
                      value={formData.organizationName}
                      onChange={handleChange}
                    />
                    <TextField
                      name="contactName"
                      placeholder="Name of Contact Person"
                      fullWidth
                      variant="outlined"
                      value={formData.contactName}
                      onChange={handleChange}
                    />
                    <TextField
                      name="position"
                      placeholder="Contact Person Position"
                      fullWidth
                      variant="outlined"
                      value={formData.position}
                      onChange={handleChange}
                    />
                    <TextField
                      name="address"
                      placeholder="Organization Address"
                      fullWidth
                      variant="outlined"
                      value={formData.address}
                      onChange={handleChange}
                    />
                    <TextField
                      name="telephone"
                      placeholder="Contact Person&apos;s Telephone"
                      fullWidth
                      variant="outlined"
                      value={formData.telephone}
                      onChange={handleChange}
                    />
                    <TextField
                      name="email"
                      placeholder="Contact Person&apos;s E-mail"
                      fullWidth
                      variant="outlined"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <DatePicker
                      label="Date of Event"
                      value={formData.eventDate}
                      onChange={handleDateChange}
                      slotProps={{ textField: { fullWidth: true, variant: 'outlined' } }}
                    />
                    <TextField
                      name="intendedUse"
                      placeholder="Intended Use of Donations"
                      fullWidth
                      variant="outlined"
                      value={formData.intendedUse}
                      onChange={handleChange}
                    />
                    <TextField
                      name="numberOfAttendants"
                      placeholder="Number of Attendants"
                      fullWidth
                      variant="outlined"
                      value={formData.numberOfAttendants}
                      onChange={handleChange}
                    />
                    <TextField
                      name="productWanted"
                      placeholder="What Product Are You Specifically Looking For?"
                      fullWidth
                      variant="outlined"
                      value={formData.productWanted}
                      onChange={handleChange}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                      mt: 3,
                      backgroundColor: "#b2904c",
                      color: "white",
                      fontWeight: "bold",
                      padding: "12px",
                      "&:hover": {
                        backgroundColor: "#9a7c40",
                      },
                    }}
                  >
                    Proceed to Next Step
                  </Button>
                </form>
              ) : (
                // Second Step (Pop-up form)
                <form onSubmit={handleSubmit}>
                  <Typography variant="h6">Step 2: Additional Information</Typography>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <TextField
                      name="additionalContactName"
                      placeholder="Additional Contact Person&apos;s Name"
                      fullWidth
                      variant="outlined"
                      value={formData.additionalContactName}
                      onChange={handleChange}
                    />
                    <TextField
                      name="additionalContactEmail"
                      placeholder="Additional Contact Person&apos;s E-mail"
                      fullWidth
                      variant="outlined"
                      value={formData.additionalContactEmail}
                      onChange={handleChange}
                    />
                    <TextField
                      name="donationReason"
                      placeholder="Reason for Donation Request"
                      fullWidth
                      variant="outlined"
                      value={formData.donationReason}
                      onChange={handleChange}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                      mt: 3,
                      backgroundColor: "#b2904c",
                      color: "white",
                      fontWeight: "bold",
                      padding: "12px",
                      "&:hover": {
                        backgroundColor: "#9a7c40",
                      },
                    }}
                  >
                    Submit Request
                  </Button>
                </form>
              )}
            </DialogContent>
          </div>
        </Dialog>
      </LocalizationProvider>
    </div>
  )
}

export default Request
