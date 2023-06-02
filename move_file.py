"""
Script to remove the date from file names and move files from one folder to another.
"""

import os
import shutil


def remove_date_from_file(file_path):
    """
    Removes the date portion from a file name.

    Args:
        file_path (str): The path of the file.

    Returns:
        str: The new file path with the date removed.
    """
    file_name = os.path.basename(
        file_path)  # Extract file name from the file path
    # Remove everything after the first underscore
    new_file_name = file_name.split('_')[0]

    # Create the new file path by replacing the file name with the new file name
    new_file_path = os.path.join(os.path.dirname(file_path), new_file_name)

    # Rename the file
    os.rename(file_path, new_file_path)

    return new_file_path


def move_file(source_file_path, destination_folder):
    """
    Moves a file from the source path to the destination folder.

    Args:
        source_file_path (str): The path of the source file.
        destination_folder (str): The path of the destination folder.

    Returns:
        str: The path of the destination file.
    """
    # Extract the file name from the source file path
    file_name = os.path.basename(source_file_path)

    # Create the destination file path by joining the destination folder with the file name
    destination_file_path = os.path.join(destination_folder, file_name)

    # Move the file to the destination folder
    shutil.move(source_file_path, destination_file_path)

    return destination_file_path


def main():
    """
    Main function to remove date from file names and move files.
    """
    source_folder = 'C:/FolderA'
    destination_folder = 'C:/FolderB'

    # Iterate over the files in the source folder
    for file_name in os.listdir(source_folder):
        file_path = os.path.join(source_folder, file_name)

        # Remove the date from the file name
        new_file_path = remove_date_from_file(file_path)

        # Move the file to the destination folder
        move_file(new_file_path, destination_folder)


if __name__ == '__main__':
    main()
