import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py



from sqlalchemy import create_engine, Column, Integer, String, DateTime, Float, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from datetime import datetime

# Create the SQLite database engine
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite', echo=True)

# Define the base class for model definitions
Base = declarative_base()

# Define the tables

class Manufacturer(Base):
    """description: Table storing manufacturer details."""
    __tablename__ = 'manufacturers'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    country = Column(String, nullable=True)

class CarModel(Base):
    """description: Table storing car model details."""
    __tablename__ = 'car_models'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    manufacturer_id = Column(Integer, ForeignKey('manufacturers.id'), nullable=False)

class Car(Base):
    """description: Table storing individual cars."""
    __tablename__ = 'cars'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    vin = Column(String, unique=True, nullable=False)
    model_id = Column(Integer, ForeignKey('car_models.id'), nullable=False)
    year = Column(Integer, nullable=True)

class PartCategory(Base):
    """description: Table storing part categories."""
    __tablename__ = 'part_categories'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)

class Part(Base):
    """description: Table storing individual parts."""
    __tablename__ = 'parts'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    category_id = Column(Integer, ForeignKey('part_categories.id'), nullable=False)

class CarPart(Base):
    """description: Table storing parts associated with specific cars."""
    __tablename__ = 'car_parts'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    car_id = Column(Integer, ForeignKey('cars.id'), nullable=False)
    part_id = Column(Integer, ForeignKey('parts.id'), nullable=False)
    quantity = Column(Integer, nullable=False)

class Supplier(Base):
    """description: Table storing suppliers of parts."""
    __tablename__ = 'suppliers'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    contact_info = Column(String, nullable=True)

class SupplierPart(Base):
    """description: Table mapping suppliers to the parts they supply."""
    __tablename__ = 'supplier_parts'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    supplier_id = Column(Integer, ForeignKey('suppliers.id'), nullable=False)
    part_id = Column(Integer, ForeignKey('parts.id'), nullable=False)
    price = Column(Float, nullable=True)

class Warehouse(Base):
    """description: Table storing warehouse details."""
    __tablename__ = 'warehouses'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    location = Column(String, nullable=False)

class WarehousePart(Base):
    """description: Table tracking part inventory in warehouses."""
    __tablename__ = 'warehouse_parts'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    warehouse_id = Column(Integer, ForeignKey('warehouses.id'), nullable=False)
    part_id = Column(Integer, ForeignKey('parts.id'), nullable=False)
    quantity = Column(Integer, nullable=False)

class Customer(Base):
    """description: Table storing customer details."""
    __tablename__ = 'customers'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=True)

class Order(Base):
    """description: Table storing customer orders."""
    __tablename__ = 'orders'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    customer_id = Column(Integer, ForeignKey('customers.id'), nullable=False)
    date = Column(DateTime, default=datetime.utcnow, nullable=False)

class OrderDetail(Base):
    """description: Table storing detailed items in each order."""
    __tablename__ = 'order_details'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    order_id = Column(Integer, ForeignKey('orders.id'), nullable=False)
    part_id = Column(Integer, ForeignKey('parts.id'), nullable=False)
    quantity = Column(Integer, nullable=False)

# Create all tables
Base.metadata.create_all(engine)

# Bind the sessionmaker to the engine
Session = sessionmaker(bind=engine)
session = Session()

# Insert sample data
manufacturers = [
    Manufacturer(name='Ford', country='USA'),
    Manufacturer(name='Toyota', country='Japan'),
]

car_models = [
    CarModel(name='Mustang', manufacturer_id=1),
    CarModel(name='Camry', manufacturer_id=2),
]

cars = [
    Car(vin='1FA6P8TH5J5100000', model_id=1, year=2018),
    Car(vin='4T1BF1FK9HU600000', model_id=2, year=2017),
]

part_categories = [
    PartCategory(name='Engine'),
    PartCategory(name='Tire'),
]

parts = [
    Part(name='V8 Engine', category_id=1),
    Part(name='All Weather Tire', category_id=2),
]

car_parts = [
    CarPart(car_id=1, part_id=1, quantity=1),
    CarPart(car_id=2, part_id=2, quantity=4),
]

suppliers = [
    Supplier(name='OEM Parts Co.', contact_info='oemparts@example.com'),
    Supplier(name='Aftermarket Supplies', contact_info='aftermarket@example.com'),
]

supplier_parts = [
    SupplierPart(supplier_id=1, part_id=1, price=4000.00),
    SupplierPart(supplier_id=2, part_id=2, price=100.00),
]

warehouses = [
    Warehouse(location='Detroit'),
    Warehouse(location='Nagoya'),
]

warehouse_parts = [
    WarehousePart(warehouse_id=1, part_id=1, quantity=5),
    WarehousePart(warehouse_id=2, part_id=2, quantity=50),
]

customers = [
    Customer(name='John Doe', email='johndoe@example.com'),
    Customer(name='Jane Smith', email='janesmith@example.com'),
]

orders = [
    Order(customer_id=1, date=datetime(2023, 9, 13)),
    Order(customer_id=2, date=datetime(2023, 9, 14)),
]

order_details = [
    OrderDetail(order_id=1, part_id=1, quantity=1),
    OrderDetail(order_id=2, part_id=2, quantity=4),
]

# Add data to the session and commit
session.add_all(manufacturers + car_models + cars + part_categories + parts + car_parts +
                suppliers + supplier_parts + warehouses + warehouse_parts + 
                customers + orders + order_details)
session.commit()

# Close the session
session.close()
