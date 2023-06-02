"""
Script to remove the date from file names and move files from one folder to another.
"""

import os
from ftplib import FTP


def remove_date_from_file(file_name):
    """
    Removes the date portion from a file name."""
    return file_name.split('_')[0]



def move_file(source_file_path, destination_file_path, ftp):
    """
    Moves a file from the source path to the destination folder."""
    with open(source_file_path, 'rb') as file:
        ftp.storbinary(f'STOR {destination_file_path}', file)


def main():
    """
    Main function to remove date from file names and move files & connect to FTP server."""
    source_folder = '/path/to/source/folder'
    destination_folder = '/path/to/destination/folder'
    ftp_host = 'ftp.example.com'
    ftp_username = 'username'
    ftp_password = 'password'

    ftp = FTP(ftp_host)
    ftp.login(ftp_username, ftp_password)

    ftp.cwd(source_folder)
    file_list = ftp.nlst()

    for file_name in file_list:
        source_file_path = os.path.join(source_folder, file_name)
        new_file_name = remove_date_from_file(file_name)
        destination_file_path = os.path.join(destination_folder, new_file_name)

        move_file(source_file_path, destination_file_path, ftp)

    ftp.quit()


if __name__ == '__main__':
    main()
