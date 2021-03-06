import datetime
from pymongo import MongoClient
from flask import Request


class LightingRequest:
    def __init__(
        self,
        operation: str,
        h: int = 0,
        s: int = 100,
        v: int = 50,
        brightness: int = None,
        temperature: int = None,
        scene: str = None,
    ):
        self.operation = operation
        self.brightness = brightness
        self.h = h
        self.s = s
        self.v = v
        self.temperature = temperature
        self.scene = scene


class LightingRequestRecord:
    def __init__(
        self,
        device_name: str,
        operation: str = None,
        h: int = None,
        s: int = None,
        v: int = None,
        brightness: int = None,
        temperature: int = None,
        scene: str = None,
    ):
        self.device_name = device_name
        self.operation = operation
        self.brightness = brightness
        self.h = h
        self.s = s
        self.v = v
        self.temperature = temperature
        self.scene = scene
        self.date = datetime.datetime.utcnow().isoformat()


class DeviceState:
    def __init__(self, on: bool):
        self.on = on


class ServiceUris:
    MONGO_DB = "10.0.0.34:27017"
    LED_STRIP_SERVICE = "http://10.0.0.63:8000"
    BULB_SERVICE = "http://bulb-controller-cluster-ip.default.svc.cluster.local:8000"
