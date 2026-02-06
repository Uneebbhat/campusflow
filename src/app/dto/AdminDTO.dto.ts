interface AdminDTOProps {
  id: string;
  adminName: string;
  adminEmail: string;
  phoneNumber: string;
  createdAt: Date;
  updatedAt: Date;
}

class AdminDTO {
  id: string;
  adminName: string;
  adminEmail: string;
  phoneNumber: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(admin: AdminDTOProps) {
    this.id = admin.id;
    this.adminName = admin.adminName;
    this.adminEmail = admin.adminEmail;
    this.phoneNumber = admin.phoneNumber;
    this.createdAt = admin.createdAt;
    this.updatedAt = admin.updatedAt;
  }
}

export default AdminDTO